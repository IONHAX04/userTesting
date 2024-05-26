// index.js
$(document).ready(function() {
    const accordionData = [
        {
            title: "What is Manga?",
            content: "Manga is a style of comic books and graphic novels from Japan or influenced by Japanese-style comics. The cover is often colorful and vibrant, while the pages are black and white. While manga covers as many genres as traditional Western novels, some of the most popular manga take place in fantastical realms or a supernaturally altered real world. They often feature a large cast of dynamic characters with robust backstories, lengthy battle scenes that can span entire volumes, over-the-top magic and superpowers and villains who are just as compelling as the heroes."
        },
        {
            title: "What is the difference between manga and anime?",
            content: "If you're new to manga, you might be wondering what the difference is between manga and anime. Anime is a style of hand-drawn animation originating from Japan, often filled with colorful graphics and an action-packed plot. Most popular manga series have been adapted into anime series, such as My Hero Academia, Attack on Titan, and One Piece. Both manga and anime are available in a wide range of genres. Popular genres include fantasy, adventure, horror, romance, thriller and mystery."
        },
        {
            title: "What is the difference between manga, manhwa and manhua?",
            content: "Manga, manhwa and manhua all present stories in a similar visual style, but manga originates in Japan, manhwa in South Korea, and manhua in China, Hong Kong and Taiwan. While each of the three runs the gamut across genres and categories, there are subtle differences in each, such as the artistic style of manga favoring bigger eyes to better accentuate emotion, as opposed to manwha and manhua staying truer to anatomically correct characters. Manga reads right to left, Manhwa reads left to right, and manhua varies by location."
        }
    ];

    const createAccordionItem = (id, title, content, show = false) => `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button ${show ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${id}" aria-expanded="${show}" aria-controls="collapse${id}">
                    ${title}
                </button>
            </h2>
            <div id="collapse${id}" class="accordion-collapse collapse ${show ? 'show' : ''}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${content}
                </div>
            </div>
        </div>
    `;

    const accordionContainer = $('#accordionExample');
    accordionData.forEach((item, index) => {
        accordionContainer.append(createAccordionItem(index + 1, item.title, item.content, index === 0));
    });
});
