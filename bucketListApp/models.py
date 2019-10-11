from django.db import models
from datetime import datetime

default_u = "https://unsplash.com/photos/SKICLmVW_eg"
default_bl = "https://images.unsplash.com/photo-1568323993144-20d546ba585d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"

class User(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    userName = models.CharField(max_length=10)
    email = models.EmailField(max_length=50)
    picture = models.CharField(max_length=5000, default=default_u)

class BucketListItem(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    bucketListName = models.CharField(max_length=80)
    status = models.BooleanField()
    picture = models.CharField(max_length=5000, default=default_bl)
    userId = models.ForeignKey(User, on_delete=models.CASCADE, related_name="users") #User refers to class User(must be above to read properly, casing does not matter, related name must be plural)

class CheckListItem(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    checkListName = models.CharField(max_length=80)
    status = models.BooleanField()
    bucketId = models.ForeignKey(BucketListItem, on_delete=models.CASCADE, related_name="bucketListItems") #BucketListItem refers to class BucketListItem(must be above to read properly, casing does not matter, related name must be plural)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="users") #User refers to class User(must be above to read properly, casing does not matter, related name must be plural)