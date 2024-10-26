export default defineEventHandler(() => {
    return {
      categories: [
        { id: 1, name: "Bài viết 1" },
        { id: 2, name: "Bài viết 2" }
      ],
      posts: {
        1: [
          { id: 1, title: "Bài viết về AI", content: "Nội dung bài viết về AI." },
          { id: 2, title: "Bài viết về Blockchain", content: "Nội dung bài viết về Blockchain." },
        ],
        2: [
          { id: 3, title: "Bài viết về dinh dưỡng", content: "Nội dung bài viết về dinh dưỡng." },
          { id: 4, title: "Bài viết về thể dục", content: "Nội dung bài viết về thể dục." },
        ],
      },
    };
  });
  