# Tip Calculator

A React-JavaScript tip calculator. Enter your bill, pick a tip percentage (or type a custom one), and the tip amount and total update instantly.

**Demo Link** --> https://react-tip-calculator-mauve.vercel.app

![Tip Calculator demo](src/assets/screenshot.png)

## Features
- Enter a bill amount with a controlled number input
- Preset tip buttons for 10%, 15%, and 20%
- Custom tip input for any percentage
- Tip amount and total calculate live as the bill or tip changes
- Amounts are derived from state, so the display is always in sync

## Built with
- HTML5 / CSS3
- Vite React

## What I learned
Building this app helped me deepen my understanding of React and how data flows through a component tree. Specifically I learned to:
- Keep a single source of truth by storing only the raw inputs (bill and tip percentage) in state
- Derive values (tip amount and total) during render instead of storing them, avoiding stale state
- Break a UI into small, reusable components (`TipButton`, `CustomTip`) and compose them
- Pass data and callbacks between components via props
- Build controlled inputs and handle user input with the `useState` hook
