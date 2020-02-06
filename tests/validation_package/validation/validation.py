from jupyter_react import Component


class Validation(Component):

    def __init__(self, **kwargs):
        super().__init__(target_name="react.validation", **kwargs)
        self.on_msg(self._handle_msg)

    def _handle_msg(self, msg):
        print(msg)
