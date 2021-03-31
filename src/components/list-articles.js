
// import Article from './article'
// import Button from './button';
// import React, {useState} from 'react';

// function ListArticles(){
//     const [articleTitleColor, setArticleTitleColor] = useState('black');
//     const changeTitleColor = function(color){
//         setArticleTitleColor(color);
//     }
//     return (
//         <div className='articles'>
//             <Button changeColor = {() => changeTitleColor('red')}/>
//             <Article changeColor = {() => changeTitleColor('green')} articleTitle ='Article 1' articleTitleColor = {articleTitleColor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Article>
//             <Article changeColor = {() => changeTitleColor('blue')} articleTitle ='Article 2' articleTitleColor = {articleTitleColor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Article>
//             <Article changeColor = {() => changeTitleColor('pink')} articleTitle ='Article 3' articleTitleColor = {articleTitleColor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Article>
//         </div>

//     );
// }

// export default ListArticles;

///#2
import React, {useState} from 'react';
import Article from './article'
import Button from './button'
import articlesListData from '../data/article-list'

function ListArticles(props) {
    const [articleTitleColor, setArticleTitleColor] = useState('black');
    const changeTitleColor = function(color) {
        setArticleTitleColor(color);
    }

    const[articles, setArticles] = useState(articlesListData);
    const deleteArticleHandler = (index) =>{
        let articlesCopy = [...articles];
        articlesCopy.splice(index, 1)
        console.log(articles);
        setArticles(articlesCopy);
    }
    return (
        <div>
            <Button 
            buttonTitle='Toggle Color' 
            click ={() => changeTitleColor('aqua')}
            />
            {articles.map((article, index) =>
            <Article 
            color ={articleTitleColor}
            click={() => 
            changeTitleColor(article.color)}
            data={article} 
            deleteArticle ={() => deleteArticleHandler(index)}
            title = {article.title}
            key={article.id}
            />
            )}
        </div>
        
    )
}

export default ListArticles;

