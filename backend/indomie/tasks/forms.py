from tasks.models import Task
from django import forms
from tempus_dominus.widgets import DatePicker

TIME_CHOICES = [
    (None, ''),
    ('12:00', '12:00'),
    ('12:30', '12:30'),
    ('1:00', '1:00'),
    ('1:30', '1:30'),
    ('2:00', '2:00'),
    ('2:30', '2:30'),
    ('3:00', '3:00'),
    ('3:30', '3:30'),
    ('4:00', '4:00'),
    ('4:30', '4:30'),
    ('5:00', '5:00'),
    ('5:30', '5:30'),
    ('6:00', '6:00'),
    ('6:30', '6:30'),
    ('7:00', '7:00'),
    ('7:30', '7:30'),
    ('8:00', '8:00'),
    ('8:30', '8:30'),
    ('9:00', '9:00'),
    ('9:30', '9:30'),
    ('10:00', '10:00'),
    ('10:30', '10:30'),
    ('11:00', '11:00'),
    ('11:30', '11:30'),
]

AM_PM_CHOICES = [
    (None, ''),
    ('AM', 'AM'),
    ('PM', 'PM'),
]

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['name', 'description', 'due_date', 'time', 'am_pm']
    name = forms.CharField(max_length=100)
    description = forms.CharField(widget=forms.Textarea,required=False)
    due_date = forms.DateField(widget=DatePicker())
    time = forms.CharField(max_length=5, widget=forms.Select(choices=TIME_CHOICES))
    am_pm = forms.CharField(max_length=2, widget=forms.Select(choices=AM_PM_CHOICES))