from rest_framework import viewsets    
from .serializers import UserSerializer, BucketListItemSerializer    
from .models import User, BucketListItem
from datetime import datetime  

class UserViewSet(viewsets.ModelViewSet):  
    # below is a multiline string  
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = User.objects.all()    
    serializer_class = UserSerializer

class BucketListItemViewSet(viewsets.ModelViewSet):  
    # below is a multiline string  
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = BucketListItem.objects.all()    
    serializer_class = BucketListItemSerializer