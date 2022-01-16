from unicodedata import name
from django.urls import path
from . import views
from .views import TaskListView, TaskUpdateView, TaskCreateView, TaskDeleteView

urlpatterns = [
    path('', TaskListView.as_view(), name='task-list'),
    path('<int:pk>/edit/', TaskUpdateView.as_view(), name='task-update'),
    path('<int:pk>/delete/', TaskDeleteView.as_view(), name='task-delete'),
    path('new/', TaskCreateView.as_view(), name='task-create')
]