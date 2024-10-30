describe("Kiểm tra trang chủ", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000"); // Đảm bảo URL là chính xác
      cy.wait(1000); // Giảm thời gian chờ xuống mức tối thiểu
    });
  
    it("Hiển thị tiêu đề chính xác của trang", () => {
      // Kiểm tra xem trang chứa từ khóa "Trang Chủ"
      cy.contains("Trang Chủ", { timeout: 5000 }).should("be.visible");
    });
  
    it("Hiển thị một đoạn văn bản hoặc một phần tử chính", () => {
      // Kiểm tra xem một phần tử có lớp CSS `.main-content` hoặc `.homepage-content` có xuất hiện
      cy.get(".homepage-content").should("exist");
    });
  });
  