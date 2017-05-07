from django.http import HttpResponse
from channels.handler import AsgiHandler
from channels import Group
from websockets.utils import send_message

# def http_consumer(message):
#     # Make standard HTTP response - access ASGI path attribute directly
#     response = HttpResponse("Hello world! You asked for %s" % message.content['path'])
#     # Encode that response into message format (ASGI)
#     for chunk in AsgiHandler.encode_response(response):
#         message.reply_channel.send(chunk)

def ws_receive(message):
    group = Group("users")
    message = {"text": message.content["text"]}
    send_message(group, message)

# On websocket.connect
def ws_connect(message):
    message.reply_channel.send({"accept": True})
    Group("users").add(message.reply_channel)

# On websocket.disconnect
def ws_disconnect(message):
    Group("users").discard(message.reply_channel)
