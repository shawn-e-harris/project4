from django.db import models
from datetime import datetime

class User(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    name = models.CharField(max_length=10)
    email = models.EmailField(max_length=50)
    picture = models.ImageField(blank=True, null=True)