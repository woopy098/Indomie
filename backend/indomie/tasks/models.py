from django.db import models
from django import forms
from django.urls import reverse

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField(default=None)
    time = models.CharField(max_length=5, default=None)
    am_pm = models.CharField(max_length=2, default=None)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('task-list')