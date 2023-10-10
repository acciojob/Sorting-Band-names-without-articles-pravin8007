//your code here
 let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'The Who'];

        // Function to remove articles and get the sort key
        function getSortKey(name) {
            const articles = ['a', 'an', 'the'];
            const words = name.split(' ');
            const firstWord = words[0].toLowerCase();
            
            if (articles.includes(firstWord)) {
                return words.slice(1).join(' ');
            } else {
                return name;
            }
        }

        // Sort the band names using the custom sorting function
        bandNames.sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)));

        // Display the sorted band names in the ul element
        const bandList = document.getElementById('band');
        for (const name of bandNames) {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            bandList.appendChild(listItem);
        }

