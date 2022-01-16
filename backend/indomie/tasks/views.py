from unicodedata import name
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Task
from django.views.generic import ListView, UpdateView, CreateView, DeleteView
from django.http import HttpResponseRedirect
from django import forms
from .forms import TaskForm


# Create your views here.
# def home(request):
#     task_items = Task.objects.all()
#     context = {'tasks': task_items}
#     return render(request, 'tasks/home.html', context)

# def addTaskItem(request):
#     newItem = Task(name = request.POST['name'], description = request.POST['description'])
#     newItem.save()
#     return HttpResponseRedirect('/tasks/')

class TaskListView(ListView):
    model = Task
    template_name = 'tasks/home.html' # default = <app>/<model>_<viewtype>.html
    context_object_name = 'tasks'
    # ordering = ['-dateDue']

class TaskCreateView(CreateView):
    form_class = TaskForm
    model = Task

class TaskUpdateView(UpdateView):
    form_class = TaskForm
    model = Task
    template_name = 'tasks/task_update.html'

class TaskDeleteView(DeleteView):
    model = Task
    success_url = '/tasks/'