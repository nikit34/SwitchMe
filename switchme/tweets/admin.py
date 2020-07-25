from django.contrib import admin

from .models import Tweet


class TweetAdmin(admin.ModelAdmin):
    search_fields = ['user__username', 'user__email']

    class Meta:
        model = Tweet


admin.site.register(Tweet)
