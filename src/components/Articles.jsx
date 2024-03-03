import { useEffect, useState } from "react";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    let imagearr = ['https://imgs.search.brave.com/eh9_c9GGTcrLrxE6kn7mw2e_UlTO3mdFP9taDx95wDo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM4LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDU2NjkvMTAwNS9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzEwMDUy/NDM2LXN0b2NrLXBo/b3RvLWN5YmVyLXNl/Y3VyaXR5LmpwZw', 'https://imgs.search.brave.com/is5F1ge6jFKFqTk0D0hltOv1paGoCO-kUvrLMInLRZ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMjk1MjU0/MTQvNjY2NjMvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NjY2MzUy/MjItc3RvY2stcGhv/dG8tY3liZXJzZWN1/cml0eS1jeWJlci1z/ZWN1cml0eS11c2Ut/dGVjaG5vbG9naWNh/bC5qcGc', 'https://imgs.search.brave.com/yHojHdjy7NsZzRHaxknNdNdO7udQDybVtqYlTys_mGk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/MDY4NjM2OC9waG90/by9oYWNrZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVJx/bHdENmkxVmZWVEFx/VE5uNjJXMmhUdnpN/Q3pyUDJ5STdhUmJ4/dFd1TTg9', 'https://imgs.search.brave.com/jyec7puiM476bjmQr4XG5ChdlwxJIkLU0mxW43FosPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/NC8yMi8yMi81Ny9o/YWNrZXItMzM0MjY5/Nl82NDAuanBn']

    useEffect(() => {
        fetchArticles();
    }, []);

    async function fetchArticles() {
        try {
            let raw = await fetch('https://toifeeds.indiatimes.com/treact/feeds/toi/web/show/topic?path=/topic/online-fraud/news&row=20&curpg=1');
            let data = await raw.json();
            setArticles(
                data.contentsData.items.map(item => {
                    // Remove <i class="tbold"></i> from item.hl
                    const cleanedHl = item.hl.replace(/<i class="tbold">.*?<\/i>/g, 'Online fraud');
                    // Remove <i class="tbold"></i> from item.syn
                    const cleanedSyn = item.syn.replace(/<i class="tbold">.*?<\/i>/g, 'Online fraud');
                    return {
                        ...item,
                        hl: cleanedHl,
                        syn: cleanedSyn
                    };
                })
            );
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    }

<<<<<<< HEAD
    console.log(articles);

    return (
        <>
            <h1 className="pt-12 mt-8 text-center text-xl font-bold" >Read Latest News On Hacking , Scams , Online Frauds And Much More</h1>
            {articles.map((item, index) => (
                <div className="flex justify-center pt-8 " key={index}>
=======
    return (
        <>
            {articles.map((item, index) => (
                <div className="flex justify-center pt-12 mt-2" key={index}>
>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
                    <div className="flex w-7/12 items-center bg-white rounded-md shadow-md overflow-hidden mb-4">
                        <img src={item.imageid == 78553754 ? imagearr[Math.floor(Math.random() * 4)] : `https://static.toiimg.com/thumb/imgsize-123456,msid-${item.imageid},width-300,resizemode-4/107214102.jpg`} alt='' className="w-32 h-32 object-cover" />
                        <div className="p-4 flex flex-col justify-between">
                            <h1 className="text-lg font-semibold">{item.hl}</h1>
                            <p className="text-sm text-gray-600 mt-2">{item.syn}</p>
<<<<<<< HEAD
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={item.wu}>Read More</a>
=======
>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

<<<<<<< HEAD
export default Articles;
=======
export default Articles;
>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
