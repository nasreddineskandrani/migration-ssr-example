
# Angular SSR migration ng8 to ng9

https://github.com/nasreddineskandrani/migration-ssr-example/tree/base/v8-no-ssr

Base branch with angular v8 without ssr

~ ~ ~

https://github.com/nasreddineskandrani/migration-ssr-example/tree/ng-8-add-ssr

Base branch with angular v8 where ssr was added

Note: migration auto. with angular script to v9 ssr (FAILING only the ssr migration part not the update to ng v9)

~ ~ ~

https://github.com/nasreddineskandrani/migration-ssr-example/tree/ng8-no-srr-add-ng9-ssr

Base branch with angular v8 that was updated to angular v9 then adding ssr to the v9

Note:
Adding ssr was done following https://angular.io/guide/universal with the command:
```
ng add @nguniversal/express-engine
```

~ ~ ~

https://github.com/nasreddineskandrani/migration-ssr-example/tree/ng8-ssr-migrate-to-ng9-ssr
1. Base branch with angular v8 where ssr was added
2. Since the migration via script to angular 9 SSR was not working:
I used the branch `ng8-no-srr-add-ng9-ssr` last commit (adding ssr to v9) and applied manually the changes to the branch `ng-8-add-ssr`
so i endup with a branch `ng-8-add-ssr` updated to v9 then adding ssr to it.
