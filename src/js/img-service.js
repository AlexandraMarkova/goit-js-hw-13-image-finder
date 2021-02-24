const key = '20350102-ed832d5aeaea3e1e1304ff4e5';
const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';


export default {
    searchQuery: '',
    page: 1,

    fetchImages() {
        return (fetch(`${url}&q=${this.query}&page=${this.page}&per_page=12&key=${key}`)
            .then(response => verifyResponse(response))
            .then(({ hits }) => {
               this.incrementPage();
                return hits;
            })
            .catch(error => console.log(error))
        );
    },
    resetPage() {
        this.page = 1;
    },
    incrementPage() { 
         this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) { 
        this.searchQuery = value;
    }
}

function verifyResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return { error: `Server error: ${response.status}` };
    }
}

