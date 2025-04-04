
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Sora', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'var(--tb-primary-color)',
					hover: 'var(--tb-primary-color-hover)',
					active: 'var(--tb-primary-color-active)',
					100: 'var(--tb-primary-color-100)',
					200: 'var(--tb-primary-color-200)',
					300: 'var(--tb-primary-color-300)',
					400: 'var(--tb-primary-color-400)',
					500: 'var(--tb-primary-color-500)',
					600: 'var(--tb-primary-color-600)',
					800: 'var(--tb-primary-color-800)',
					900: 'var(--tb-primary-color-900)',
					950: 'var(--tb-primary-color-950)',
				},
				secondary: {
					DEFAULT: 'var(--tb-secondary-color)',
					hover: 'var(--tb-secondary-color-hover)',
					active: 'var(--tb-secondary-color-active)',
				},
				accent: {
					DEFAULT: 'var(--tb-accent-color)',
					hover: 'var(--tb-accent-color-hover)',
					active: 'var(--tb-accent-color-active)',
				},
				success: {
					DEFAULT: 'var(--tb-success-color)',
				},
				warning: {
					DEFAULT: 'var(--tb-warning-color)',
				},
				error: {
					DEFAULT: 'var(--tb-error-color)',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.95)', opacity: '0.7' },
					'50%': { transform: 'scale(1.05)', opacity: '0.3' },
					'100%': { transform: 'scale(0.95)', opacity: '0.7' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-small': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10%)' }
				},
				'fade': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				},
				'gradient-move': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'ripple': {
					'0%': { transform: 'scale(0.1)', opacity: '1' },
					'70%': { transform: 'scale(1)', opacity: '0.7' },
					'100%': { transform: 'scale(1.2)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
				'spin-slow': 'spin-slow 2s linear infinite',
				'bounce-small': 'bounce-small 1s infinite',
				'fade': 'fade 1.5s infinite',
				'gradient-move': 'gradient-move 3s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
