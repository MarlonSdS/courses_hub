from flask import Flask

app = Flask(__name__)

#rotas
@app.route('/cart', methods=['GET'])
def cart():
    return 'items do carrinho'

app.run()