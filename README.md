# Public Folder

Place your profile photo here and name it `profile-photo.jpg` (or update the path in `src/components/About.jsx`).

Supported formats: JPG, PNG, WebP

To use your photo:
1. Add your image file to this folder
2. Open `src/components/About.jsx`
3. Find the `profile-image-placeholder` div
4. Replace it with:
   ```jsx
   <img 
     src="/profile-photo.jpg" 
     alt="Prince Kakadiya" 
     className="profile-photo"
   />
   ```
5. Add CSS for `.profile-photo` in `About.css`:
   ```css
   .profile-photo {
     width: 100%;
     height: 100%;
     border-radius: 50%;
     object-fit: cover;
   }
   ```