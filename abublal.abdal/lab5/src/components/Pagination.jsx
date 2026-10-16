import React from 'react';

export function Pagination({currentPage, totalPages, onChange}) {
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <nav className="pagination" data-testid="pagination" aria-label="Пагинация">
      <button
        type="button"
        className="pagination-button"
        data-testid="pagination-prev"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Назад
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === currentPage
              ? 'pagination-button pagination-button-active'
              : 'pagination-button'
          }
          data-testid="pagination-page"
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination-button"
        data-testid="pagination-next"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперёд →
      </button>
    </nav>
  );
}
