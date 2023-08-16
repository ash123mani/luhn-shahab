
# Technology and tools
  This project uses lerna(nx).
  
  We can find client and server inside packages.
  
  Backend:- NodeJs, Typescript,Express
  
  Frontend:- NexJs, Typescript
    
# Requirements to run

    You need to have node downloaded
    or
    Install node: https://nodejs.org/en/download

    You need to have yarn or npm  installed
    or
    Install yarn: 
    https://classic.yarnpkg.com/lang/en/docs/install

# Run Project from root directory
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
# Client Url
https://luhn-validation.netlify.app/

# Backend

 ## Healthcheck
https://3e98-3-115-123-72.ngrok-free.app/api/healthcheck

   ## Validate
    
    curl --location 'https://3e98-3-115-123-72.ngrok-free.app/api/validate' \
    --header 'Content-Type: application/json' \
    --data '{
     "cardNum": 448527574230832711
     }'
    
