__author__ = 'Steven Richards'
from django.contrib.auth import get_user_model
from apps.content.models import Resource, Article
from apps.core.models import Person
from rest_framework import viewsets
from apps.api.serializers import UserSerializer, ArticleSerializer, PersonSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer