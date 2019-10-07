from django.db import models
from datetime import datetime

class User(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    userName = models.CharField(max_length=10)
    email = models.EmailField(max_length=50)
    picture = models.CharField(max_length=500)

class BucketListItem(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    bucketListName = models.CharField(max_length=80)
    status = models.BooleanField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="users") #User refers to class User(must be above to read properly, casing does not matter, related name must be plural)

class CheckListItem(models.Model):
    # this is like schema in express IssueItemSchema = mongoose.Schema({description : String, done : Boolean})
    checkListName = models.CharField(max_length=80)
    status = models.BooleanField()
    bucketListItem = models.ForeignKey(BucketListItem, on_delete=models.CASCADE, related_name="bucketListItems") #BucketListItem refers to class BucketListItem(must be above to read properly, casing does not matter, related name must be plural)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="users") #User refers to class User(must be above to read properly, casing does not matter, related name must be plural)