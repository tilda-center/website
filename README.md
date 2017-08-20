# Tilda Center
Hackerspace in Novi Sad, Vojvodina, Serbia

### Prerequisites:
* tmux
* node/npm
* python/pip

### First time preparation
We'll assume you use `vex` to setup your virtualenv. It doesn't matter if you use any other virtualenv manager, as long as it resides in ~/.virtualenv/tilda
```bash
pip install --user vex
vex --make tilda pip install -U pip
```
PATH variable should be set to include ~/.local/bin as that's where `vex` executable is located.

To initialize your environment:
```bash
bin/init.sh
```

### Development
To run development server:
```bash
bin/dev.sh
```
