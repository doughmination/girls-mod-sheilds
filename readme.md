## Files

`/png` contains the original images created using an online overlay tool

Mid hex colors were obtained using `hex_middle.js`

`/svg` contains all SVG versions with gradient support

`/svg-to-png` contains PNGs converted from SVGs via Inkscape (Discord prefers PNG)

## Commands
To convert the SVGs to PNGs, I used the below:
```bash
brew install inkscape # MacOS
sudo apt install inkscape # Debian/Ubuntu
sudo pacman -S inkscape # Arch
sudo dnf install inkscape # Fedora
# Windows: download the latest .msi installer from the Inkscape website

for f in ./svg/*.svg; do
  filename=$(basename "$f" .svg)
  inkscape "$f" --export-type=png --export-background-opacity=0 --export-filename="./svg-to-png/$filename.png"
done
# Uses Inkscape for accurate SVG rendering (better than ImageMagick for gradients/fonts)
```

## Color Roles

Helper: `f4e919` - `ff00fb`

Trainee Moderator: `00a9ff` - `8bff00`

Moderator: `6207a0` - `ff8200`

Admin: `6bffe7` - `2b42e0`

Manager: `965f7f` - `ffaadc`

Head Manager: `b453e0` - `cf1662`

Co-Owner: `f5ad38` - `92f2fd`

Owner: `9e6fff` - `9fcfff`