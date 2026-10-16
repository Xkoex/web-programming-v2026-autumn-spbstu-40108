import React from 'react';

export function Pagination({currentPage, totalPages, onChange}) {
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Пагинация">
      <button
        type="button"
        className="pagination-button"
        data-testid="page-previous"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Назад
      </button>

      <span className="pagination-indicator" data-testid="page-indicator">
        {currentPage} / {totalPages}
      </span>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === currentPage
              ? 'pagination-button pagination-button-active'
              : 'pagination-button'
          }
          data-testid="page-number"
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination-button"
        data-testid="page-next"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперёд →
      </button>
    </nav>
  );
}
