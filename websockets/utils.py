from channels import Group

def send_message(message, group):
    if (group == None):
        group = Group("users")
    group.send(message)
