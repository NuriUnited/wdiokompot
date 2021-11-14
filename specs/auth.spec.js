describe('Auth', function () {
    it('Successful log in', async function(){
        await browser.url('/user/login');
        await expect($('.login-form-button'))
            .toBeDisabled();
        await $('[qa-id="email"]')
            .setValue('nu@list.ru');
        await $('[qa-id="password"]')
            .setValue('Aa123123');
        await expect($('.login-form-button'))
            .toBeEnabled();
        await $('.login-form-button')
            .click();
        await expect($('[alt="avatarIcon"]'))
            .toBeDisplayed();
    });
});


