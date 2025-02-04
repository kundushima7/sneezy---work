//github repository hosting from vscode

function uploadCoverImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            document.getElementById('coverImage').src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
    input.click();
}

function uploadProfileImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            document.getElementById('profileImage').src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
    input.click();
}