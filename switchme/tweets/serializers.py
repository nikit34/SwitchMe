from rest_framework import serializers
from django.conf import settings

from .models import Tweet

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS

class TweetActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    @staticmethod
    def validate_action(self, action):
        action = action.lower().strip()
        if not action in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError('This is not a valid action')
        return action


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['content']

    @staticmethod
    def validate_content(content):
        if len(content) > MAX_TWEET_LENGTH:
            raise serializers.ValidationError('This tweet is too long')
        return content
