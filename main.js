var canvas = new fabric.Canvas('myCanvas');
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";


function player_update() {

    fabric.Image.fromURL("https://i.pinimg.com/736x/c3/54/77/c35477a56b5190948952c3914628bbbc.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    })
}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);

    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '87') {
        new_image("wall.jphttps://th.bing.com/th/id/OIP.TNkLG3FGaNAAAc5O7euCpAHaKb?pid=ImgDet&rs=1");
        console.log("w");

    }
    if (keypressed == '71') {
        new_image("https://th.bing.com/th/id/OIP.GTT24GbUxK9pHU1AhyiVswHaNK?w=115&h=180&c=7&o=5&pid=1.7");
        console.log("g");

    }
    if (keypressed == '76') {
        new_image("https://th.bing.com/th/id/OIP.P5OU4J88zGcf4sWGwZoWrQHaQD?w=161&h=350&c=7&o=5&pid=1.7");
        console.log("l");

    }
    if (keypressed == '84') {
        new_image("http://pngimg.com/uploads/batman/small/batman_PNG102.png");
        console.log("t");

    }

    if (keypressed == '82') {
        new_image("https://www.clipartkey.com/mpngs/m/109-1096184_black-widow-comic-transparent.png");
        console.log("r");

    }
    if (keypressed == '89') {
        new_image("https://w7.pngwing.com/pngs/938/769/png-transparent-iron-man-miles-morales-howard-stark-maria-stark-comics-iron-man.png");
        console.log("y");

    }
    if (keypressed == '68') {
        new_image("https://i.pinimg.com/originals/cc/94/e8/cc94e8441863b2c7ce75b91ee56bf812.png");
        console.log("d");

    }
    if (keypressed == '85') {
        new_image("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAFdALEDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAMEBQYHAgEI/8QASRAAAgEDAwEGAwUEBwUFCQAAAQIDAAQRBRIhMQYTIkFRYRRxgQcykaGxI0JywRUzUlNigvCSk8LR4RYkorLxJTRUVWNzg6PS/8QAGwEAAQUBAQAAAAAAAAAAAAAAAAECAwQFBgf/xAAyEQACAgECBAMGBQUBAAAAAAAAAQIRAxIhBAUxQRNRYSIygZGxwRRxoeHwBiNC0fFS/9oADAMBAAIRAxEAPwDW6KKKACiiigAooooAKKKKACqxr/aeLTnNpabJLkbhO7ZKQcZ2jggt+n5CV1zUl0nS7+/P3oYwsQODmWRhGmQfIEgn5ViFxfZ76Ys007OoUEIS80hJzIw545JG7njyqHJNrZEuOKe7LVPq19eMry3UskpUvEJSqq4xysRQ7fng/QVI6Rr99A0UYlYwogUwy5fc58RHtjz5/wCsJZaErRRNqV5MZZAJAkWxYoyR0UEfj0+VLDSLmKcJb3KNA+C7TEliM7tp24PpnnyxVZOnsyy8ba6GoWN9FfR70VkZcb0Yg4z0II4Ip3Wf2FzqehajoS3d1Hcabqty9h3mwxPb3DrmNWAJXaxwB05/PQKtwlqW5UnHS6CiiipBgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFJ+0hZn0SyjjjDBtThBYknYTFKB4ADnOTn0/TLtLtnuLq3VtuyC5aZwPu4jXGPxIrQu32pB7vT9L73FtEHlvNoyVuJVCwhvPgEk/x58qqWmtbWclxGgV9irHnOQWPjf8AkPpVPLPekXcME0mybk7QaFakQXHxBAO0yRojoD7Ddu/Kl4tV7PSL3y3mIxxveN1AA/tbh/KmDWml3I72aKKPHJVVXDZ6DAFOrew7O3NjPbJLZbEbvI+6miY94nh2/e569M1DtRbalY41W9sr/R4F06cTump2UcTCNwBJIWXK94BnHtWm1nmlaZpttL2bs0iVC+rJcExg4mFpazyo8gJx12gfIVodW8PRmfxHvKwoooqcrhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRUbqmoSaWi3kixtYoNtwT4Hi5z3hkZtmD0AKjnHiGaRuhUrJKmOralBpOn3d/MrOsCZWNSA0jk4VAT6+f4+VUnUftFjkkS00mE75ZlRLuZQ0exyNrJE2G3c85H45zUFqOuapqMLC8uzLEpcwqyKEdxlG2pEFyeDj5+WaillS6Ekcb7kXqV21/fyzSE95cSyXE7jJQTB04XOfCuAo56L78RNpc9w8MbOrEx5ByORvYLn6YqRulMiGOHckZi3IVUIEZuMMSMcn8PxzH2FtJeJcLNAsZjYLEMESRLyQNx8vMcfrVftbLEb1UiYfUL1QPgYYnIXxvKyjbnqE3jGf9fNGykv7aSe7bSEnVIXaTElqyBAcg44Ix6jn2plHcXOmGSOe2FxC33XAOPqB50vFrem6fBfzDTBFJcxNFHlJVMjMPu+Pjb68Uij2SJnJLqXXT9VtRrnZ5JJBHaLZoWzye/lGY1c9QBkZ+nka0mvnWwu47/JMjC6iZrtm+7jOyMqhIxgKq8f4Sflq3Z7tFb29pLFqlxIoVleFmjkk2I4G6MmNScA8jjofQVLjnoemRVyR1+0i6UUxGraWxtkiuY5pbllWGKAiSVgeSzIvIUdWJAA+ZwX1WU76FagooopQCiiigAooooAKKKKACiiigAooooAY6nqmm6RaveahcJDAp2jP3pHIJCRr1JP8A16DIol52/mu3MenS2tsgPUtFNO3p/WDZ+Cn51VvtI1eTUdekso3JttKT4ZFz4PiDhpnx65wp/gqid6wYftWJPQKoI/Cq89U9oujb4V4ODSnnx62/P/X+7NAmR57iS8kcPeSOZWnmRGkMhGN24Ae34VH3UE+2ICFP2AuO5ZR3ixNKQxZUbkEHpwetVuO81aDb3c7qPJJAV88Y2vT+LXdQQATwgnybIH5daqPBljutzpI815VxNLLDTXpt+hLwal3iTrcI0NjY2fd3EjYaWV3CxoEC9M4Y9f8Ar1LZXwvILy0RWj0+K1DxxMC81nKuRJj0HK/MHpXmj6/oCTst/HsjldHkZlLIxX9yVMZKng5HI9wcVZBddhZ0umF9aRSR3Msunyw3HdG3gOD3K7nDlTzlSuPbinJyS3VHMcVjx48zWJ6o9n/wbSQxYWUDKEAg46555zUD2lijuLa4lVcCGOLH8QIzinGqdp7P4pYtNCXcKQBbuXaY1llVm/aRrwemN3HJGcUxudTju7ZohEUjbxuD4mcjyz0xSRhNNSoVyxzTg2kyvaXLNDOrW6t8S2xIWA3gFpE4ZDwQQDmr5Y3ao5i78LM08ypGVTu4kjjVpogAc7WLFlHQY9+aPDc/AX1peJGB3EyybPIr0K4PtVg0a60q0vZTLIqiV1Y3MgZyIJnXc4UZ6jqfcjyqbNG+pWwxTTUd2v1/I0bsutnb6rcW0sMYnewt7q3mEkmNqSNE0GGODtJ3IDkgNV6qgDRLd7QX+m3LXFzbr8RDcROGE0aHvANwONw5KkfLp92W0XtL8TJbWN2rNcyHZHLGB4+CR3iDke5H5UmDKl7EixPgHmw/iOHd17y7r19UWmiiirpjhRRRQAUUUUAFFFFABRRRQAU01G9i06w1C/lwUs7aa4IJxuMalgo9ycAfOndVXt88qdl9SCfdeWyWX/7fxCE/oKbJ1FsmwY/Eyxh5tGIyRXmp3ZhQGS8u5ZJJCc+eZJJHI5wOSav+j9kdLslThbidVV5p2VnwCd6yERq+IWGVYj7px1wahOx9mRNe3jljNI4gt+7GZsLiRjECrEnJBICMcKeKvC3EaNGpcbkBlURNGZgpHiks1unl68mSMxr8s/egx7IucxyueZqqoYz6D2dMM0Zit0kjIRxPJAwjG3jvmDeQJAcjaeAdp5qoX3ZexN1cRWYVMWst0rPKyiAJIgHe78uAu7DYyeh5HJn9Q1WdI5nhldFSNghFxqHdqZZMPJCsUaR7W6SJsAHlzyYnTtdK6jbyXEjoTDNDHK73VybYbkAUQTEB9gBXGR4W5+7UxnFMvIpUZopozFcRkrIjoUJI43AHkV1psFgbiMX2Ei8TmXbJKRtGQvdLkHJ46Vf9X0Gz1hGe2ZYrlNkcDvKshExGRb31yM7mYY+GSNT12nAAAoMkF5Y3ElvdRPFNC2145Bh1PoRzg+o8vOle6oToaHa6bp2o2wktItG1OGJVDxmH4O6hGOFdo1YqfnEB701bQ9IknS0iN3pl7Mf2FtqMYe3mZRyttcxs0TfISZ9vSpwXNxazRTwSTQXEXMc0DFJVzzgEcEeoOQavWj9rbO+WOz1oQxSyMoivURRayyj7vfxHhJM9COM9Cp4MDjKG6JE1LZlVvuzGsrdwWnwj97cMY4JUBe1cgbiWkXoAMk5AOB51KXnZGzsLaws42e61i+ZobVWDLH+yw8szsfuxR5zgc8++a0NLjIjVmVnU7XZc7WZTgkex/nXbyQHLuyIibi7vgBIwNzEk+XHPyqJ5XLqPUdPQzpez2qaG1ukGpXKx3e8S/DysjEeR2qBgNhgOfKtK0CC2063hiUI6+KUSt3TTqJmZhuYePoBnIqv3EsdxB8c5IF9exi0D8Yt4FdIxz03ncfrUlp99veHxSSR4TkolwuG8O8bQJhkeFBzgc/OeKrfuJLLNrTbouVFJxfcUZzjgEdMDpSlTkIUUUUAFFFFABRRRQAUUUUAFRXaK1gu9C1yCdgsZsZ5CzdFMS98rH2BAqVqsdtbgpozWCPtudXubfT4AOSQ7h5Dgc4Cg5+fvTJuosscMm80Kdbr4epn/AGZdhYxx7WYyGUhI1Z5JdszL4ApUbh1BZwvrknh7d6lMu+KASSqMlu5eQruXksq2YjiWRedwBP8AylrHRLMIIlVe5MUSxRzljG6McRPNHHhmDNuXBOAwB5JwJQWukRp+1iRwULsbh4Vk2wNlh3ZYKJYc5xsG4eXpFBCZ5+JklPzZmurtMkCzd1ITKMsz29wqsWHLL3jlfGOuPNPrVXtGuJ7h5FZtsYOWchV3HaOWJ4zj35wPPIvfblbKG1CQx20ZRZBi1aAopbacKsUh8J3B08PG8j92qpoccbArs8fXw7SwydpJZ8Io8sn/AAmpexASNtq2oWIRkJQiNkj3KfDG+SVjU/dBPn1B5yKip5Xvrn4mcliCSC/LYyT4m6k+55qduYLcQXM5O9Y1LEx7mV2OQDJcORnd0IXzH4wEEUk89raRYMtxKkSgnA3SEAZ9vM+woQrO2kRwcqM+X08uKRDOro6bkDFWBZVyGRgQSpyMg46itXtexHZyK1iW47ya4ZVJlZyvixnKKvA/OqV2j0T+iroIj95bzhpYXPUNGQrKfoR/oUimm6Cmi16ffyavpDzLOUvWs54Lh7fwSQXqxnJUDoejL7MKUiupJNCtrl3Rp7nT7WMNMAVkublUhGQeCSWJx7VD9i3CNqqnBw9nM3PUMjxdP8oqT+Dmh0zQ7Wfu99tqWml+7JZFCzvtwSB0BAqq4pS0+pMm2rO1uLTUfjNLRjEbdptKCMMd00Z2Qv4sjIOxwR/a/Bjo8t4EJuImQxynfJLHK3jPhI76E7gx8geT7DmlOzGnrqv9Kam8hikl1BlQQquDIiod7gg+W0cEdCSSTxZ7XFvdXEEkawmK4lQd0ksEbFz3hCCPdGcg5d2UE9PlYtN0Rdiy2TF4Qx5BEeDu3ggopyG8x6GnVIWqKkIxtO5nclMbTuYnI28UvUq6DQooopQCiiigAooooAKKKKACs67T3Xxna/RbEM3daVYzXUu3HglufBk58gCh6f8AXRazXTIhfarrmtyKZDqF3MLReQxsbfwooHHLryo89oxzUWTsi1w7UYzm/Kl+b/ayaYog/aRlUjDy93hAJFdQLmF2dgBjAkjLMM4GNwXA4F2zs6wzF3V42hlh+Lkia4EZkt5h3CRR7ZVDRsFXGV9+e50ATf3gBAgYTAHzObW9QFC2c+ByIs/4sCqFr2sGwWT/AOLmLMA6vuhTvBIozLIz+Fg4GR0NCVIrdSI7baot1cC3id2ijwIw5lykIO9ExMofw529T92ojTHeNosKGRuVUjcGbG1lCE4JIwMkdQtRcjvM8kjnLOSTXUc8yI8YHHAJXIIAORyDTkSSg4q2T+oXwuZO6DbxHgyStJ3hYnoOAFHuAMZz6Uyt5ZLe7t7tAGeKdJVGSownG36jj60xiyMbeRyPPBp6oyuRjBOCMjOev+v9YXtREX+HtWtwLYsx/YosW47F8I6bldwQfU9PQ1G69qaarJbJFlo4BLufPgLPtBCHzAA5PqT5DJrSbd0ceQS3iDAZKrwDz0BzwP8AWZTagjAB4wCpHl7io1jSdjnJtUTXZdrFLjUI+9Iv5zDDFC3AeCNS+6P1OSQ3pgetTh1DTri2uJ1uUFvbXSLJKcALNbTqwA65BIG31B96o0DLE3xAdo5oHUxFGKuJHyoZT1wefzpKBjbh7ZpSLWWaGQRkkRGTDr3bY5GckKfI4+iSxXK7FU6VFm0fUG0DV7mzdidNvZU1DTpRnY6TKhAyfMrt49iOpGbFqGpWcnaG7ELICLOz+IbMqEOFJKSyRHcqgFcgjnp7VAaSJriGS1yvxdslvJZGUBlSaLc/dSDptbJjcehPoMQ8epxHXLycAxrNJ30e7KmNOcZZfFkYwOoJpdNOxOuxtGlzd9aoxbc3IJLq5OOMkqByeDjHGaf1Wezd0HSRWLqVbISYKJOfC2XTwtz1OTz5+lmqSLtCMKKKKcIFFFFABRRRQAUUUUAMtWuPhdM1a53FTBY3UqkdQyxtjH1qk6OzNDEohlEKRLHuVo4RmLmJlklOMg+xGPXPEz28v59P7PTyQortPdWtqVf7pEjE4PtwM+2fpkRae7cSXs0lw/T9oT3ag+SRjwgfSoppuWxImtFGl6ldXEUPdfDt3E/xMLvCWmgj+JjZmQNGyxLtcBlJI61kvaSSWS/keTAMwM+BsGO8JbGE48/U1YtGgYarZC2iY5MnerEzKDFsIJIBA44pj2zsPhr1hH/UokM0SnPhjnG0gH2YN+Ptw299LHYq1JlRAoIYeIeQOfPI+VKIua7K4B+VJqpmn+H1w3PYgAo9DzyegpzGSGyBnyK9Mj0z6+lNYz0/Gn1tyxyBgLksc4ByOSAPKpjGHluoBcuBmTaG4/dHRTTncdzDOVBG456FuhI/10/FnG+3JJ6ZOT+tWzTuxGqajbWt/wDGxWe+IukbQ988qSYO2XLKAMY49ec5HCNpdQpvoQckW6JiOSoYj+JRvwPnim1yAUlI/u9499pD1K3dle6VcXVlcqDJHGLiFl5WWNTwy+fqD/ome/7L6fftbvYXKraBYVvYTlpYleFZSkTHjJDDr5HOTjFI5JbipMj9LmfdcSRH9oFSaM9SQ+WHPzNRGqWDp2isksBI6XVvb3NqYxluS7SbSeMoQ5x7Y587DLZ2umavYwWZ/wC63EEtlHl2fbPAxjKMznOQy85NMr/S73Q7zQjdstxbxamxs7hkyrxXZ3NFIm7gpIM43dJPcgJaYdC66XbtB3aLIYpZGWFI2hlty0zLnMkMqFMxrlmIx4mxwattpKHQrkHZwnTJjBwpOKg1UI6yq8whZXii8WoYW1izJcT+B2G6RiAvyHWl49YtIb9LAl5b2SMTTQQMz/CqRkd+ZcbeMBRnJJ6eYdshOpPUV4rBlVh0YAj5HmvaeAUUUUAFFFFABRRRQBUftDMf/Zm7DgFjd2Pdk4yrrKHyPoCPrWQxScg+XFaj9p0oXQrKLPM2pxE+6xwyk/qKyaBxgAnnqflULl7bRengrhY5V3b/AJ9TROzHw1vour6okSvcwG674OxG4W6d4iAgcA5H4n6UDWLq9u/iLi7ZnuLqZSznhQE5CIOgAGAo8sfjcOzEzPY9q9PU8zabNeRggnJWFo324PX7v41TdTx8Og54YsPTllH8qatm2yHEnKcUiHj60ow4PH0pNeCPnSpPqf8A1qLudFCljdicagYOT5HgZp/CuclSVwNw+h86aqCOpXgD15p1D3n7gJJGM8AfUnNWzlWL93uBwMBgykf2TjBH/Kr7p3bWG3tYILiAF0RVbEnd7SAAcblIIPlg/TjJo6pKFJ3BnbkhuBn2xXBeYZ3p8uen1ximSipdRU6LBresLq1+tzGMRRwNCOCAd/UDdzgDA5A8+BmrPoD29tpTaxcXAitltIoLkycRp8E0kQfPUsQVXHsPWs7E4ABZWCjqRyPyribF46RB3aJIoiqFm7rczNkhTxnoCcedI4WqFvey96l8DqNidX0u6E8fxyX0e3AMMhSON1ZfvAkqpIPmx9c0trl4mrdmb+xkjka9gEV9p8qoxDhMzt4xxnaGB+YrMJ4LmxVZ7aSRPEVkEbEAg9CQK0HQNetbjT0Vdsl4iHfCu7wbjjEhK7QOuOTxjg9KFGgsik7Wyy6G9rA0kOod1BCZImuIxDbWuGQIwkI3O2S3hAA9zxL3TnS7LQza3Mscc0iXF0kZVGnLKj75WUB2PXJLH/lRdShbTtXvYXARHl7xMZ2mGfDjbnyHSrLo+rJfrDo2po7h8JYXSKDIrgEIkmOM44VvoeuaSd7MdSTpGxaUYjp9n3X3AmByWzyTnJ55zmn1QXZjvEsPhpHDtbsFDAYyvIU4+QqdqWLtWhjCiiinCBRRRQAUUUUAZn9qlwAmg2wPOb2dx8hHGp/81ZrCpEYlB+64B+tXL7Trjvdct4QeLbT4EI/xSO8h/IiqYX7uzAPAabk+eB5is+cqyWvM7HBw8Z8D4cv/AC38eqLT2S+Im1qzEBz3cdw11kEj4V4zGwfHOCcY+XtxEdp4bSyupbC3uY7hYpGXvEOcYwdvXBKnKkjjj2490uDU9YJtLH9hZqQZgrukK5HDXLp43c+nP+UVaX7AaXLFGWvbpbhUw0kYj7tj690wP/mqWeRJ7nNcPjk5KS6GZr1Fd4LEelTWudmdQ0N1kdhcWTkrHcxqVAcj7kqHOD6ckH18hExjnOPTA9aIVJ7GrxM9OB13FCkQOTnjA/L2pwLm1gVVd8NzhFG5xznkeX1IqOMjyyhIyeSVDJnc7eaofT1NT9joDRrJPK0coFrLcRJEElBIjMndyFvApwM8ksPfGDa6HPEc+qBWIjtmc7dwMjgDHuEB/Wulur2QKVW2Ctg5Ackexy1NryBbR4wqriNQzELtZg3hYNj64rtbUSRRSxOyMyDxKeGI4yRQA5VLx2Xc0SqeuyIBiD5biSacRoiXNsDgK5MDeWA48JH1AqJa5v7RwrEOCMjqD/ypwmpQzYWTMcmVYMw4DA5Bz0/SkAmJIkwqyeJD4WyADjPU48xTiz0aGxeW9g1G6swEfvGiePBU4O0q6kEZxxjmkTdWkgO51G7n76Y56keKml7qsNuU/aLNIu3uUUq0cZxt7x9p6+g/0UAR1v8ApNW0mbVmhklmSfb+yjjuEtt5CidYgFG4EMoPIyegauIXkjCuh/bWrpIhHUtEwkQ/kKUul+PtXclnmc98GY5ZpkXzPXxDI+g9KaWE8bvBGX8TxmNgfMoQUxz5ik7kuzh6m7dmp0m+IdPuTQW9wn8MgLD9RVjqk9iJN1npuQRmzkjTOfHFFIVRgT5EYI+lXajH7tDJdQoooqQaFFFFABXle14SBySABySegA5oAwbtxcfE9ptabPEc6W49u4iSI/mDVcuzthto/wDDvP8AmOad387ahqV7cZy13eTz/wC9kZ/51H3jh53A+6uFX5KMVmL2p2d5k/s8M4+ij/PkaD2TcQ6PY92FDMbiSQf2szNyffpVsW5hiCmSQIsgBQyHAPGevSs90DWrGw0uLvie9t5ZI+7HLOkjGQOB6DODTW77RSXyvb3Kk2veFo+7OGj9DimODlJmG1p6l81G6LxzxvDFNp7xsl13vKlCCSeOmPI58qx6SRQjgHjGWwedh4A+Z6fjVibX5ItMv9PLmX4iHuoXHOFLAktnocA1Xbe3NxKsY9Gnkz5heMf8qtcPGm2ypxkn4aS8yR0i0ZzE5X9rcP3cW3AKY5Crk4APmfp1arfMzR6XKqLvtmniiaOFilpZXgYTEx8/tCwUknpyGGCxFQdpHEHSNow0SxgTBmZY+652zSsoyEXrgdcE+XElq84KWiSNO8qxySPcFe7t7mEnZC8EKkAAAPyV8yQSGqx1dmZ2K5dKJTeOwyFikbJPQgAD881zpuWtIB6GQf8AjNI3Eu23nX9+bCj5Zyc/jSmlH9lIP7E7gfLatOGil3CH7skeTD9DTSK2XfKCP3Mj8RUpIMlfYn8xSezxMfWNvyINIAzkgRRHtUDl84HspqLuxiR8ei/jU8y5C5/tE/kKib+LG5gP7P60qAf6XMzRCPOOhU+hByKd2uiQ3UlwRM8Qdy8ewjEbE5xjrwelMNJjzb3D5GYJIGI4/q7gmMH6MFH+apaGaeCeF4Y3k3OqFEGSdxwDj/XWmZLrYmw1rp9yc07tBq/ZK4k06Yw6lAgS4tvHsmhV1J8G3JGQTlOnmMVPjt3BcqTczX9oBnKtB4AOf3rUs2OvlWaa/NKur6gwIBLqSvDAHYuRmm9pqRE9uLiPvI+9gEio5RnRXBKknI56U3TqiEnpm0jc45b63Yp38qsuCUDlgMgN+8dvn60+g1W6V4xOA0RYK7HAkUHgEBRjjIz/ANOajBr8+qQJerapbmUum0SPIB3LtGDk4yeK5nuLl45P2rA4bG07fL1HP51ApaOg6tRoX9IWP96P9lqKzrfP/et/vH/50VJ4zG+GjT6YazN8PpGtT5wYdOvZAfdYWIp/UD2vkMXZrX29bMx/7x1j/nViTpNhgjqyxj5tfUwWI7TcS/3cTAfxNwP51HnncT5809bi3mPnJIq/RRmmfoPcVn4zs+Md6Y/m/n+wr0XHyob7or1unFeMCAo9qURrZo44Az5DJPyospJPiGkXjC449Dxj+VDjgDHkaW0+BWaXnG7Cgk4CkjgknyHnVjG1TMHmMJtp9kS1hexl2J2tNbsCqShu5kB5zMw9MAKPLj5hbVJ45WZo7iSeApHFbPKAhEYUDaiLwqg7to5x71HrZT2/xDxK8yKs0hZUxIEAz3jx5JC9Mcnp7cNncMI9pO1cKABjgDbnH41MvQxmIXLLuQYztXef1pfR2P8A3lD5NG4+qsv8qaSnLSNjHQAHqadaYyd9cKCSdkeT7hjSiEnIeR/EB9eRXLeZA4CsCfLkYry5IETP0wY8/VgtNzI5wCeOCcep86QBVTnPPr/KmV9t7p/8o+ZLCnAJ8vxppeklMYwDhsZ/dztH8z9aVIBPT7pYPjIXICXNpPb5PG1yUniYn0DIhNTVvcOFinibDlSUYHgEjFV6KPfPbpt3b54E2+u5wMcVpnbbSxaa5NJGoEV/bxXQ2jC94B3Mo+eVDH+OhqxU66Ga3M00r7pwO+y3eHzY5zyaTh/roj/9RP1FPdXhSKaBo4XjR7eMMzFiJZ0GyWRSfU9R5e1MYj+0j/jX9aF0Bu3ZpvZsxnTrZZASBcX3hQ4ZwspO3P15qVkCmGbKofATlUVdhwfuY5wfMEn8smvaHI0djayYJjju75JMAnarsp3YXnAwM/P2qcaaORSkZbDcFh0I5Bxjy9KpS6llCe8etFe90vvRSWgo1Sqr2/m7rsvqa5wZ5LOEf79HP6GrVVG+02XboNnED4ptThGPVUhmb9cVcye4x/AR1cTBepjc5xDAv9ou/wCJwKar1X504uz+02joiqg+gpFB4h7A1SjtE6niPazV5Ujs58I9SK9brXp+8o+temkJtPU4YZ2/Kntgn3sKHJOBGeBL6x/ln6UzP8hT+w27GLZ25CnbjcCT4QueOTwfapcZkczVY/iPb2WWKzd0lfZOFh78A5vFPiZWJ6KuMD1/HdAqyqMjnr86e6zIxlhjdv2w7wTQpnuomyAFjHTGOvn680yIReNwDAdD5jyq0uhzb6iDgkHGeuamOz9lbzC7knuUtQSsUM8ysYFZfERMy8qpyPFggY5qO2bkGOpcL8yeABVitrZUsLqAdDbSr82KNz+NQZsvhpUbXKeXfjZT1dEn8+wpeaLq6wamksDosOnT6gsoHeQSxQbXzFKnhOfLn6VXu9Q8hl556ipGw17VdM0vULaGQSWl1bSW8ltON8a9+hjLx/vKRkng4PmKrouGHBjjb5g/yNS45a7szuK4aXDSSe9qyUVwxAB5OB16mkbjLCY+WUA+QIApkJz1EaD8f+dKiaaRdrEYJC8ADj51OqVlPcnOy1kLztF2bhK5U6pbyuPVLcfEEH/Zrae0+mi+bSXMM0qNPJYXC26kukV0FdJcjoFdEyfIMTWb/ZtarN2itpgCfg7LULgt5AuIrdeP8xrbKjq1Q8wr7SLC7stS0q37srp8emxR2AUAQh1YmcR488kFs88j1qjKrKykg8MD096+oNR0nSNXgFvqVnBdQq29VmXJRsY3IwwwPuDVPvvst7Lz7msZ7+wf90Ryi4hU/wAM4L//ALBSVWyHrS1v1Kn2dkWPT5S7KgS9uTl2VRyEPVsU7l1bSxJFDbu1zcSyJBBDarvaWaRtqxoWwuST6/pU3ZfZhaKc6nrV9dgbsJAi26kEk+JnMj/gRVr0zsx2Y0hkksNNt450+7cSBprgHGCRLMWcZ88EVF4Nu2L4lKkUz4DtD/8AJb/8Yv8A+qK0z6n8TRTvBiJ4jCs5+1Bz3PZyHye5u5T/APiWMf8AFWjVmX2pNg6B/hi1Ij5s0C0Z/cZocpSfGQv1+jMplbdI7epJoiGSx9hXPXNKxgAMfcfkKqPZHRQTnktnv7/yWvGHNej78nsFH868zlhTSw918QI5Pzp9BKttDvBAkKnDEAqqHwsCMfeJ+5x+nLLPNEsndou7+sbmJP7PkJGHrjhfQfOp8Ksw+bTSUYoSuJ/HkJghdiAkEomScE+Z5riNkBBZQxznmku7dhvYqAc4LMBux1AzXcYwcEfI9fzFWjnR5EuZ7YgcBjIfwxVos2Q5RgCCFX6EgGqxEdrop6qqrz7kmp2xkywx1wf0JFZvE7yO/wD6cShh/N/sQ0FsZYZoj0w0Z9ip4NQbDn8qt9qY473U0f8Aq1muJCT5KGL5/Cqk5BZivQsSPlmp+HbbkZXPcUYYsLXXdfKjwU5i2hWJGfIDyzTenEOOhHy/0auHKmsfZLErr2jumA7xXs7VG9EIeVgPritSrOvspgMel63LjwS6kiqeDnu7ePI49M1otCAKKKKUAooooAKKKKACst+1Zl3aCmfF3V6SP8JeLH6GtSrHvtRm3azYxDpFpsRI/wAUk0pP6Coc3uGpypXxF+Sf0r7meYpVB4fqa4x0pVcbVqk2dRij7R4Bkv8Axn8gK8wdx+VdL90e+4/iTQOrE+lDJVG0jmT9nGz/AEHzpjknMj5ZiRjPmegzT+8huNscZiddxBO7gAEcEmmkoClUXonLH36AVbwqonJ81zRyZ6g7SQbuCWOWPU/yA9KTbKlWUYO4fXnpXu4dBya6VMumevXH5Cpm63MyMXJqK7iybgyk5PIzmprT5MSxZ6bl/UCopFx+Ip9bnYQRng8fjms3K9W53/LoeC0l2HUkeNTv4WPE0YBP+GSJVqrzwS2sskEy7ZEOCPbqCPY9RVp1KWO31FJ2xtNnHKRnG7aXGB88VVJpZJ5ZZpDl5HLsfc+Q/lU3DXbfbYzP6hli0xj/AJKUvlf8r4ni888Y9KcRAM655JOKbjilYygyz7ii7d4U4YqTghSfM1dORN7+zazNp2XtpCMfH3d5fAYx4GcQoce4QH61cqhuzWr6NrWkWlzpKmO1iVbQW7KFe1aFVXuWAJHAxjB6GpmlAKKKKACiiigAooooA8rEPtFl39pr5P7mCyi/GFZP+Ktwr5+7YXHxPaPXpOuL6aAfKDEH/DVfO/ZRtcnjeWUvT7or5pQcAfIUkxpQn9KqM6WDSbZ0uAq8eQoVlDqWGRvUkeoByRR0A9gB+VJhhvX03fl0pYq2JxE9GJ15fYnoNUs3xDqUJwxz30ShlwefFH1/D8Ke3PZjS7+3e60y5SVQpz3b5UHGcMPvj5Y+lVebOFbzA2H5rStjqV1p1zHcwHkeGVG+5LGeqMB+VW9FbxOE1X1I+WCWGR4jGVZCVbd1BHBBpytncxQLdOn7OQ7Q2RkAHaOOvrVpuE0F0TWLgxLDOoaCNCGnkcZygjBxkHgkj8egi9V1SO/s7WBbPuTDJuV1mZwy4bhlYcHkdDTZTco9CzwqrNGiLjYE4+VPEBBb0AJqMBIIxTuObxYPmCPyqrNHZ8PmV0x/rEsCvaSTIH3Waoi45O2Zs8+wIqLH9ESEZzGSejg4x8xmutTve/kjhaIAWy7A247iGwxOP0/61H8YAPT91vQ+hq1hg1BWctzfLHJxmSUN1f8A39Sdg0zR5hxcWxJ6YulU/gzAVzc6MFjlNuVKYw4SRJTxzkGMkfSoPGOCOfPpTzT7+fT5hJFhonws8L/clTzB9D6HyqVxa6My7XdG2fZvYrp2hNbMpFxJMt7cHjGbhBsXg9QoBPzq7VX+yAd9Ds7x4jEdRJvUjPJSBwEhBP8AAFP1qwU+N1uIwooopRAooooAKKKKACvmjUZzcXl7cZz39zcTZ9e8kZ/519E6xcfCaTrN1nBt9PvJVP8AiWJiPzr5sc5aqud7pHQcpVQnL8kcjJI+dKGuB1X516x5HzA/Oq5tRelNnTnANIjczKF6kjH45rqQ15GDuB9OR86fBWylxuWoya7Dtk42n97jPluHT8R+tNHyoYEdOPkacuwGQT4TjB81Xybj06GmsrbvvPyOM4JBx57hVxHJHEK7mHUnOAB5k+Qp7OAu2PIJQZcjpvYAkD5cCurCFSVcjAA3MT1Kjk/IUg7bmdv7TE89eTUOZ7UbHKsaeRzfZfUSI54ruMYYUAUZIPFV77G9GOl6mJ3lxJO5ikICRHagVVzgADJOM8/OkFUbTg5xgYI6ilbtMSo+f66KOT5HG0g/hSK8c/6I9DVzHWlUctxzn+Inrdu/+HWMjnO3yPmPY080rTptU1LTdNiyWvrqG33KC2yN28b4HkoyT8qbcHleN3BzyPka0b7MNN3avPdzHBtLOR4Y0nDAySMId7xKOMDcBk+ftTyka/DFFBFDBEoSKGNIolHRURQqgfIClKKKcAUUUUAFFFFABRRRQBWe3M/cdl9ZwcNKtvbr795OisPwzWCN941sv2m3Ii0WxtgfFc6gjH3jhidj+ZWsZJGSapZnczqeWR08Nb7tnmfEKCcsvsc/hXOea88yfb+dMSLTntXqDHJHzpSLJLD5frSWeR9TS0Izk+pwPpUuNbozeNl/al8BUocjIbAJxgckHqBnjNNNqbgNzJkgE5OB7kDn8qsFpCt5p13AqJ8ZZSidGYZM0Mn7re4wQPbHpUYkU0kndbXeZ22LHkrs5xliAT7AY5qdSuzn6Ou8EVqYkGN+N58/kaaU+u4lhKwB0cpncydMjjHHocjqenWm4VR51VyyuR1HLOHaw6n3ExXJNKNjypI1GjQybbHN14jbD0t1A+jtSCg5IPWlbhiGgyOO6UD/AGjRhSAy5xnjOM4z54q5i91HK8wd55fzsexRFhI4GVQgSdQOc8eHxfXyrTvs2dE1S4gtRlHsXnupWLSd6hZDFhzjBBJ4285OelZrbymGaF8+B2WOYeTRscHI9uo+Vat9mkSJd69tRQI1jjDDzyVJ+mQcfOnN70UktrNNoooqQaFFFFABRRRQAUUUUAZL9qd6Hv8ASLFTn4a0luWA8muH2gH6J+dZnz+NW3tzK1x2m1xj0jlht0HosUKJgfXJ+tVfZ51QnK5NnY4MElghH0+u4mAc/SuTwTS2OfpSTdT86ROwyQ0o5Xlm+gp3CBgCmqDg+5NOVO0D5VPj94x+OdYorzZK6U7rc3JU4zb7XPHQyL6118Q0Nq9z0ub2WXum43IJSS7jjOQuFBz+97cJWAYWupTAeJlEKD1YjaMfVq5vyqzxQqPBa26DHUbmG7PT5UNXMy1aiMJiO8IHRQijHkAoGK5HNBBJJPmc16AarSduztuHxPHCMX2R7sz60d3gdKUU8V71zTbLnhR6jW7j/ZRPj7pC/QgmmyEAY/CpC4INtOh6oYWHz44qNHQVbwO4nJ85xqGdNd1+32FGz4fmP1rafs3RQO0jDP8A71CmT54Mvl+HnWLoNzwD1lhXPzccmtt+zbumsNdkR1c/0tNE+3OAyDdwT1zuzUr95GMujL3RRRUg0KKKKACiiigAooooAwHtSytr/aFuv/tK6X/Zcr/KoAt7VI6zcC51DU7gdLi+u5h/nlZv51GBay+rbPRN4xjBdkjkk5PypBzy1LnAJz6U3fG5vepIdTN4nZCkY+7S4AxSSsg8/KnCKrIMyImcjLnr9Knxd2YnMmkoRXr9iSt5raJNJsWL97dTR3EjBcoiOWMYODnJ44/9Axnl72e9l8pJyF/hUnH6Cve6nDiZJg88To0bOQd2zCgHd5YGBTcho/C/hfJYqfLJpZLSmyrwcfFzwi+l38jrivM1wW9/yoDVTo7R5EKBq7BFJYJrtUekZNBt9jmTxreIByyDHzXBqOyTySScDGfSnsjMqzFepGD6gHg4pooBPOT8qt4OhyvOJJzj519xzaRmS4s1GMd7CzFjhQocE5rbPs3s0stJ1aPvlkmbWLl5lXB7s93GigkeoG7r+8KxSGJGbGCxHG0HCDP9tv1rY+wus6fBZSWF3c7Ll7l5kabu0iO6ONNiFQAPu5GfXr6z9zCL/RRRTwCiiigAooooAKKKKAPmWRgetJbx5Vpz/ZNubK9oGVP7J05S34/EAflSDfZHcgnZ2hjI/wAWnMP0uDVFYJHWZOcYnLYzN2GR8vUVc+zX2darrPdXuqF7DTZEMkQG03lwCvgZEIIVfMluT5DncNE7I9joezSXrXE0F5eTzIyTiAIYoUXARN5ZgSSSefT05ttTwxad2Y/F8c8rah0MV1v7NZdF0681M63HNFaKjtGbJ42cs6xqoImYckgdKqUUby4aFEVV5EjAFiB5xq3hHzOflWr/AGn3txHpul6bFgRaldO10wOG7m1CybAB5Elcn296zeHC9MDHAB4AHyqSkuhnynKe8mIvbsPFc95c2gDfECFVFxb+Hd3yYAJ29T7Z6dRG30c1pMA6SrFKiyWss0botxAQCssRcDKnqCKtmnbTNMyhS3w86AN1YNGRj68Cth0mwt4NF0WxkSOWO206yhw4WRGKQqM+IYpHHVsx+HM8MtUT5sWZTzxj2pZJIT14r6CvOx/Y2+ZnuNEsC7DDPDH8O59y1uVOfeoW5+zDsVN/Ux39p72147flciQVE8F9DWxc3lH3lZkCvD5UqXTaceQJrQrn7JoAGNhrdwh/cW8t45R183hZD/4a4h+yu7BjE+uRGIsomENmyyGPPiCM8pGfTKn5eVQPh5Gxj57hr2tjKWYsGIPBfJx6V4TIygKAMcEgck+5rVO0v2c2On6L3uhW1/e38V3G8/eS97cSWjI6skUUaqhIba3CZ4PyrPf6H7TpvRdA1jkeen3gYYPXGyrkY6VRyXEZvGnqGMLSRnCn3NS9tcOwB3jcABj2qOl0/WLUF7nTtQgA+8Z7S4jH13oBSEUqkjDgHnzFKyual2b7bvpqJY6l3k1qvhiYHM0I9F3dV9s8eXTFaFba92fu4xJDqVng44klWJwT5FJcN+VfO4uHO3JBAAGcinsN7GoG4qT6Dk/hSW0O2PoxJIpVDxujoejIwZT8ivFdVnX2ea4l5JdacDlooXnfAOAVZEBbyB5I8untWi09O0IwooopRAooooAKKKKACiiigDK/tLeT+ldGUn9kunzOo9GM2GI/Bap8Ucb/AHmUZ5A3YHPlWxdqOzFn2kt7dZJ5ba6s+9e1uIgHCiQLvSSMkAqcDzB46+uLapaPpUrxvcNPsZlyFEWcHHQ7v1qKSd7D09iWhghjZWVlDc+LcePL5Vr/AGfuRNptnCx/b2cFvbzDIIOIxscEHow5/H0r56XVXHhEZxn+8Hr/AA1sn2cM82k3927uzzXoi2ttIRIYlCgEAHzOaIXYPoXeiiipRgUUUUAFFFFABUZe9n+zeolmvtI06d26yS20Rl/3gG/86k6KAKk/2c9gHJP9EbCf7q7vkA+QEuPypS37AdhrchhpSykHI+KuLqdf9iSQp+VWmigBC2tLKyiENnbW9tCDkR20SRRg/wAMYApeiigAooooAKKKKAP/2Q==");
        console.log("u");

    }
    if (keypressed == '67') {
        new_image("https://th.bing.com/th/id/OIP.clixXtReBinUuVE8GEIXAgHaNK?w=182&h=324&c=7&o=5&pid=1.7");
        console.log("c");

    }
}
function up (){
    if (player_y>0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down (){
    if (player_y<500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<850){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}