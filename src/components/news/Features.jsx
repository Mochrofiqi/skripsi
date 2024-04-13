import { useEffect, useState } from "react";
import { blogPosts, galleries, videos } from "../../Data";
import Sorotan from "./Sorotan";
import SorotanGaleri from "./SorotanGaleri";
import SorotanVideo from "./SorotanVideo";
import VideoCard from "./VideoCard";
import ArtikelCard from "../blog/ArtikelCard";
import GaleriCard from "../galeri/GaleriCard";

const Features = () => {
    const [tab, setTab] = useState("blog");
    const [search, setSearch] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [blogPage, setBlogPage] = useState(1);
    const [galleryPage, setGalleryPage] = useState(1);
    const [videoPage, setVideoPage] = useState(1);
    const [orderBy, setOrderBy] = useState("latest");

    const [blogPostsToShow, setBlogPostsToShow] = useState(() =>
        sortArticles(blogPosts.slice(0, 6), orderBy)
    );
    const [galleriesToShow, setGalleriesToShow] = useState(() =>
        sortGalleries(galleries.slice(0, 6), orderBy)
    );
    const [videosToShow, setVideosToShow] = useState(() =>
        sortVideos(videos.slice(0, 6), orderBy)
    );

    useEffect(() => {
        setBlogPostsToShow(sortArticles(blogPosts, orderBy));
        setBlogPage(1);
    }, [orderBy]);

    useEffect(() => {
        setGalleriesToShow(sortGalleries(galleries, orderBy));
        setGalleryPage(1);
    }, [orderBy]);

    useEffect(() => {
        setVideosToShow(sortVideos(videos, orderBy));
        setVideoPage(1);
    }, [orderBy]);

    function sortArticles(articles, orderBy) {
        if (orderBy === "latest") {
            return articles
                .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
                .slice(0, 6);
        } else if (orderBy === "popular") {
            return articles.sort((a, b) => b.viewCounts - a.viewCounts).slice(0, 6);
        }
    }

    function sortGalleries(galleries, orderBy) {
        if (orderBy === "latest") {
            return galleries
                .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
                .slice(0, 6);
        } else if (orderBy === "popular") {
            return galleries.sort((a, b) => b.viewCounts - a.viewCounts).slice(0, 6);
        }
    }

    function sortVideos(videos, orderBy) {
        if (orderBy === "latest") {
            return videos
                .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
                .slice(0, 6);
        } else if (orderBy === "popular") {
            return videos.sort((a, b) => b.viewCounts - a.viewCounts).slice(0, 6);
        }
    }

    const handleClick = (tab) => {
        if (tab === "blog") {
            setBlogPage(blogPage + 1);
            setBlogPostsToShow([
                ...blogPostsToShow,
                ...blogPosts.slice(blogPage * 6, (blogPage + 1) * 6),
            ]);
        } else if (tab === "gallery") {
            setGalleryPage(galleryPage + 1);
            setGalleriesToShow([
                ...galleriesToShow,
                ...galleries.slice(galleryPage * 6, (galleryPage + 1) * 6),
            ]);
        } else if (tab === "video") {
            setVideoPage(videoPage + 1);
            setVideosToShow([
                ...videosToShow,
                ...videos.slice(videoPage * 6, (videoPage + 1) * 6),
            ]);
        }
    };

    return (
        <div className="features w-full">
            <div className="feature-options">
                <h1 className="text-2xl font-semibold text-primary-100 mx-20 mt-10 mb-3">
                    Lihat lebih banyak dengan FitAja!
                </h1>
                <div className="flex text-xl gap-3 overflow-hidden tab-content mx-20">
                    <button
                        className={`focus:outline-none ${tab === "blog"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                            } font-semibold py-2 px-4 w-40 text-center rounded-xl`}
                        onClick={() => setTab("blog")}
                    >
                        Berita
                    </button>
                    <button
                        className={`focus:outline-none ${tab === "gallery"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                            } font-semibold py-2 px-4 w-40 text-center rounded-xl text-white`}
                        onClick={() => setTab("gallery")}
                    >
                        Galeri
                    </button>
                    <button
                        className={`focus:outline-none ${tab === "video"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                            } font-semibold py-2 px-4 w-40 text-center rounded-xl text-white`}
                        onClick={() => setTab("video")}
                    >
                        Video
                    </button>
                </div>
                <div
                    id="articles-options"
                    className="justify-between flex h-10 md:h-[44px] gap-2 md:gap-4 options px-20 mt-4"
                >
                    <div className="w-2/3 md:w-3/4">
                        <div className="flex w-full overflow-hidden rounded-xl">
                            <input
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                id="searchArticles"
                                type="text"
                                placeholder="Cari..."
                                className="w-full border-2 px-4 py-2 rounded-r-none outline-none rounded-l-xl border-primary-400 focus:border-primary-200"
                            />
                            <button
                                className={`${isFocus ? "bg-primary-200" : "bg-primary-400"
                                    } px-6 py-2 font-semibold text-white text-xl rounded-r-xl`}
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                    <select
                        className="w-1/3 my-auto text-base font-semibold text-center border-2 md:my-0 md:w-1/4 text-primary-200 md:text-xl rounded-xl border-primary-200"
                        id="sortArticles"
                        name="orderBy"
                        value={orderBy}
                        onChange={(e) => setOrderBy(e.target.value)}
                    >
                        <option value="latest">Baru</option>
                        <option value="popular">Populer</option>
                    </select>
                </div>

                {tab === "blog" && (
                    <>
                    <h1
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className="mt-8 mb-8 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
                        >
                            Kumpulan Berita
                        </h1>
                        <Sorotan />
                        <div className="grid mt-6 mx-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {search ? (
                                <>
                                    {blogPostsToShow
                                        .filter((post) =>
                                            post.title.toLowerCase().includes(search.toLowerCase())
                                        )
                                        .map((post) => (
                                            <ArtikelCard key={post.id} post={post} />
                                        ))}
                                </>
                            ) : (
                                <>
                                    {blogPostsToShow.map((post) => (
                                        <ArtikelCard key={post.id} post={post} />
                                    ))}
                                </>
                            )}
                        </div>
                    </>
                )}
                {tab === "gallery" && (
                    <>
                    <h1
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className="mt-8 mb-8 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
                        >
                            Kumpulan Galeri
                        </h1>
                        <SorotanGaleri />
                        <div className="grid w-11/12 pt-6 pb-6 px-8 gap-2 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {search ? (
                                <>
                                    {galleriesToShow
                                        .filter((gallery) =>
                                            gallery.title.toLowerCase().includes(search.toLowerCase())
                                        )
                                        .map((gallery) => (
                                            <GaleriCard key={gallery.id} gallery={gallery} />
                                        ))}
                                </>
                            ) : (
                                <>
                                    {galleriesToShow.map((gallery) => (
                                        <GaleriCard key={gallery.id} gallery={gallery} />
                                    ))}
                                </>
                            )}
                        </div>
                    </>
                )}
                {tab === "video" && (
                    <>
                    <h1
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className="mt-8 mb-8 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
                        >
                            Kumpulan Video
                        </h1>
                        <SorotanVideo />
                        <div className="grid w-11/12 mt-8 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {search ? (
                                <>
                                    {videosToShow
                                        .filter((video) =>
                                            video.title.toLowerCase().includes(search.toLowerCase())
                                        )
                                        .map((video) => (
                                            <VideoCard key={video.id} video={video} />
                                        ))}
                                </>
                            ) : (
                                <>
                                    {videosToShow.map((video) => (
                                        <VideoCard key={video.id} video={video} />
                                    ))}
                                </>
                            )}
                        </div>
                    </>
                )}
                <div className="flex justify-center my-4">
                    {(() => {
                        if (tab === "blog") {
                            return (
                                blogPosts.filter((post) =>
                                    post.title.toLowerCase().includes(search.toLowerCase())
                                ).length >
                                blogPage * 6 && (
                                    <button
                                        onClick={() => handleClick("blog")}
                                        className="px-8 py-2 mx-auto mt-4 mb-8 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                    >
                                        Lihat Lebih Banyak
                                    </button>
                                )
                            );
                        } else if (tab === "gallery") {
                            return (
                                galleries.filter((gallery) =>
                                    gallery.title.toLowerCase().includes(search.toLowerCase())
                                ).length >
                                galleryPage * 6 && (
                                    <button
                                        onClick={() => handleClick("gallery")}
                                        className="px-8 py-2 mx-auto mt-4 mb-8 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                    >
                                        Lihat Lebih Banyak
                                    </button>
                                )
                            );
                        } else if (tab === "video") {
                            return (
                                videos.filter((video) =>
                                    video.title.toLowerCase().includes(search.toLowerCase())
                                ).length >
                                videoPage * 6 && (
                                    <button
                                        onClick={() => handleClick("video")}
                                        className="px-8 py-2 mx-auto mt-4 mb-8 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                    >
                                        Lihat Lebih Banyak
                                    </button>
                                )
                            );
                        }
                    })()}
                </div>
            </div>
        </div>
    );
};

export default Features;