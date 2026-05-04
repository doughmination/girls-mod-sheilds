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

## Level Roles

Bronze: `b65f33` -  `ffd27a`

Silver: `c0c0c0` - `8f8f8f`

Gold: `ffd700` - `b89600`

Platinum: `e5e4e2` - `bdbdbd`

Diamond: `70d1f4` - `a6e7ff`

Galactic: `382df0` - `7a6cff`

Supreme Yapper: `57e4d6` - `57e4d6`

## Other Roles

Bots: `3498db` - `ff00ff`

YouTube: `ff0000`

Twitch: `71368a`

Boosters: `f47fff` - `b44cff`

Honeypot: `ff0000` - `631212`

## Staff Roles

Staff On Leave: `555555` - `222222`

Retired Staff: Holographic (`A9DFFF` - `FFB2EC` - `FFBB80`)

Friends: `ff00ff` - `ff0060`

Helper: `f4e919` - `ff00fb`

Trainee Moderator: `00a9ff` - `8bff00`

Moderator: `6207a0` - `ff8200`

Admin: `6bffe7` - `2b42e0`

Manager: `965f7f` - `ffaadc`

Head Manager: `b453e0` - `cf1662`

Co-Owner: `f5ad38` - `92f2fd`

Owner: `9e6fff` - `9fcfff`

---

<sub>The MIT license in this repository applies only to the source code authored by the repository owner. Third-party marks referenced in `svg/24-clove.svg` are the property of their respective projects and are not covered by the MIT license. The Debian swirl is a trademark of Software in the Public Interest, Inc., used under the [Debian Open Use Logo License](https://www.debian.org/logos/). The Arch Linux logo is a trademark of the Arch Linux project; the recolored derivative used here is for personal, non-commercial identification purposes per the [Arch Linux trademark guidelines](https://archlinux.org/art/). No endorsement or affiliation with either project is implied.</sub>