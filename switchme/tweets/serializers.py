from rest_framework import serializers
from django.conf import settings

from .models import Tweet

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['content']

    @staticmethod
    def validate_content(content):
        if len(content) > MAX_TWEET_LENGTH:
            raise serializers.ValidationError('This tweet is too long')
        return content
