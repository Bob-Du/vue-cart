import cgi
import cgitb
import json
import time
cgitb.enable()

print("Content-Type: text/html")    # HTML is following
print()                             # blank line, end of headers


fs = cgi.FieldStorage()

inputs = {}
for key in fs.keys():
    inputs[key] = fs[key].value

# print(fs['p'].value)
demo = {
    "result": {
        "list": [
            {
                'id': '1',
                'title': '  小清新格子包臀裙     ',
                'price': '  55   ',
                "productNum": 1,
                'pic': '    ./images/3aa3744cf515f5c0b7fd8b21c4c6edaf.jpg    ',
                'checked': '',
            },
            {
                'id': '2',
                'title': '  呛口小辣椒刺绣吊带连衣裙     ',
                'price': '  128  ',
                "productNum": 1,
                'pic': '    ./images/b1faf31f316b3079a96a82169c426258.jpg    ',
                'checked': '',
            },
            {
                'id': '3',
                'title': '  立体花喇叭袖短裙雪纺衫  ',
                'price': '  118  ',
                "productNum": 1,
                'pic': '    ./images/689dd5eae077459af4a17e9f815bad50.jpg    ',
                'checked': '',
            }
        ]
    }
}

if inputs['req'] == '1':
    print(json.dumps(demo['result']['list']))

