from django.urls import path, include

from .views import (
    profile_detail_view
)
from accounts.views import login_view, logout_view, register_view

urlpatterns = [
    path('<str:username>', profile_detail_view)
]
