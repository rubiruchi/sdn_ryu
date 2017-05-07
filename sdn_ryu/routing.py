from channels import include

channel_routing = [
    include("websockets.routing.websocket_routing", path=r"^/ws/")
]
