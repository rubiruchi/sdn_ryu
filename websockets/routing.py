from channels import route
from websockets.consumers import ws_connect, ws_disconnect, ws_receive

websocket_routing = [
    # route("http.request", http_consumer)
    route("websocket.connect", ws_connect),
    route("websocket.disconnect", ws_disconnect),
    route("websocket.receive", ws_receive)
]
