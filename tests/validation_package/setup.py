from setuptool import setup
from setuptool.command.develop import develop as _develop
from notebook.nbextension import install_nbextension
from notebook.services.config import ConfigManager
import os

extension_dir = os.path.join(os.path.dirname(__file__), 'validation', 'static')


class develop(_develop):
    def run(self):
        _develop.run(self)
        install_nbextension(extension_dir, symlink=True, overwrite=True,
                            user=True, destination="validation")
        cm = ConfigManager()
        cm.update("notebook", {"load_extensions": {"example/index": True}})


setup(
    name="validation",
    version="0.1",
    descrition="a validation test for jupyter-react-js, using jupyter-react",
    author="Chris Helm, Thomas Pouvreau",
    licence="ISC",
    data_files=[
        ('share/jupyter/nbextensions/validation', [
            'validation/static/index.js'
        ])
    ],
    install_requires=[
        "ipython",
        "jupyter-react"
    ]
)
