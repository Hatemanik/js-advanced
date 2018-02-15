var xhr= new XMLHttpRequest();
xhr.open('GET','https://pokeapi.co/api/v2/pokemon/?limit=151',true);
xhr.timeout=25000;
xhr.ontimeout=function(){
    console.log('Время вышло');
}
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200) {
            // сервер возвращает json-объект, массив с покемонами храниться в свойстве results
            // можно посмотреть структуру возвращаемого объета через console.log(), так:
            console.log(JSON.parse(xhr.responseText));
            var pokemons = JSON.parse(xhr.responseText).results;
            var ul = document.createElement('ul');
            for(var i = 0; i < pokemons.length; i++) {
                var li = document.createElement('li');
                var image = document.createElement('img');
                var span = document.createElement('span');
                span.textContent = pokemons[i].name;
                // тут вобщем правильно, только тогда придется пихать картинки в корень проекта,
                // лучше создать папку img и запихать туда, только тогда ниже надо будет путь исправить
                image.src = 'img/'+(i + 1) + '.png';
                li.appendChild(span);
                li.appendChild(image);
                ul.appendChild(li);
                document.body.appendChild(ul);
            }
        }
    }

}

