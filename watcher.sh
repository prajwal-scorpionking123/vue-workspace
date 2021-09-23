[[ $1 = '' ]] && BRANCH="master" || BRANCH=$1


# SERVER="remote_username@remote_host"
DEST_FOLDER="./blog"
PARAMS="BRANCH=\"$BRANCH\" DEST_FOLDER=\"$DEST_FOLDER\""

echo ===================================================
echo Autobuild server
echo selected barcn $BRANCH

echo ===================================================
    #Connected

    cd $DEST_FOLDER

    git stash
    # to stash package-lock.json file changes

    git pull
    git checkout $BRANCH
    git pull origin $BRANCH

    # rm -rf node_modules/

    # npm install
    
    npm run build

    mv dist blog

    sudo mv blog /var/www


    exit