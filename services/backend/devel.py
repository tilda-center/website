from config import configs
from tilda import create_app

config = configs['development']
app = create_app(config)
