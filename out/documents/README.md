# Documents Folder

This folder is for serving static files like PDFs, resumes, etc.

## Usage

1. Add your PDF files to this folder
2. They will be accessible at: `https://irfancnk.com/documents/filename.pdf`

## Example

If you add a file called `resume.pdf` here, it will be accessible at:
- `https://irfancnk.com/documents/resume.pdf`

## Linking in Components

In your React components, you can link to these files like:

```jsx
<a href="/documents/resume.pdf" download>
  Download Resume
</a>
```

Or open in new tab:

```jsx
<a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
  View Resume
</a>
``` 