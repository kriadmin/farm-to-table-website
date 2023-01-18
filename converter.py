from os import PRIO_USER
import pandas as pd



minn = """
            <div class="container lists" id="sandwiches-items">
                <div class="col-12 menu-header">
                </div>
                {content}
            </div>
    """
repeated = """
                <div class="row {type}">
                    <div class="col-4 item-name align-self-center">
                        <div class="i-n">
                            {name}
                        </div>
                        <div class="i-d">
                            {desc}
                        </div>
                    </div>
                    <div class="col-3 item-quantity d-flex justify-content-end align-self-center" count="0">
                        <button class="btn ads">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        0
                        <button class="btn ads">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                    <div class="col-5 item-prices d-flex justify-content-end align-self-center" discount="0">
                        <div class="after-discount item-price d-none"></div>
                        <div class="before-discount item-price">{price}</div>
                    </div>
                </div>
"""
arr = []
a = pd.read_csv("sandwiches.csv")
for row in a.iterrows():
    a = str(row[1]["Unnamed: 0"])
    x = str(row[1]['Unnamed: 1'])
    y = str(row[1]["Unnamed: 2"])
    z = str(row[1]["Unnamed: 3"])
    x = x if x!="nan" else ""
    arr.append(repeated.format(type=y,name=a,desc=x,price=z))

with open("new.txt","w") as f:
    f.write(minn.format( content="\n".join(arr)  ))

