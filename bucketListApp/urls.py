from django.urls import include, path                    
from rest_framework import routers
from . import views #if you include the name of the file after ".", you don't need to include "views." in router.register

router = routers.DefaultRouter()
# r is short for regular expression (regex)
# similar to express's app.use("/issueitem/", someRouter)
# trailing slashes are not necessary in django unless it's being called via AJAX
router.register(r'user', views.UserViewSet)
router.register(r'bucketlistitem', views.BucketListItemViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)), #api (or whatever) can be added as prefix for all routes
]