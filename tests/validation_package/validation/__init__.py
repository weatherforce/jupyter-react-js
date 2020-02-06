from .validation import Validation


def _jupyter_nbextension_paths():
    return[{
        'section': 'notebook',
        'src': 'static',
        'dest': 'example',
        'require': 'example/index',
    }]
