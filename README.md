# SkyQrypt website

A dependency-free corporate website for an integrated cybersecurity and satellite quantum key distribution company. It is designed to deploy directly to GitHub Pages.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a GitHub repository and push this directory to its `main` branch.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The included workflow publishes the site after each push to `main`.

## Customize before launch

- Confirm that `info@skyqrypt.com` remains the correct public contact address.
- Review all claims, service descriptions, and metrics against the actual offering.
- Stock photographs are stored locally in `assets/images`; replace them with owned production assets before launch if desired.
- Add your legal entity details, privacy policy, and social links.