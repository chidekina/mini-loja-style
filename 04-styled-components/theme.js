export const lightTheme = {
  colors: {
    primary: '#4F46E5',
    primaryHover: '#4338CA',
    secondary: '#6B7280',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    shadow: 'rgba(0, 0, 0, 0.1)',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '200ms ease-in-out',
    slow: '250ms ease-in-out'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1025px'
  }
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#6366F1',
    primaryHover: '#5B21B6',
    secondary: '#9CA3AF',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    shadow: 'rgba(0, 0, 0, 0.3)',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171'
  }
};