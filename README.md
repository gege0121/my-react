My React app(continuing)

1.start:
* npm init react-app my-app
* cd my-app
* npm start
...

2. make http request(use Axios) 
* npm install axios
* import axios from 'axios';

```
axios.get(url).then(response=>console.log(response));
axios.post(url,data).then(response=>console.log(response));
axios.delete(`/books/${id}.json`)
```
:bulb: use firebase as Server/Database