class PostsController < Sinatra::Base

    get "/posts" do
        
        posts = Post.all
        posts.to_json(include: :user)
    end
##================add post
    post "/posts/addpost" do


        image=params[:image]
        image1=params[:image1]
        image2=params[:image2]
        image3=params[:image3]
        price=params[:price]
        location=params[:location]
        bedrooms=params[:bedrooms]
        content=params[:content]
        
       
        if(image.present? &&  location.present? && bedrooms.present?)
 
                post = Post.create(image: image, image1: image1, image2: image2, image3: image3, price: price, location: location, bedrooms: bedrooms, content: content)
                if post
                    message = {:success=> "Post created successfully"}
                    message.to_json
                else
                    status 406
                    message = {:error=> "Error saving the post"}
                    message.to_json
                end

        
        else
            status 406
            message = {:error=> "All field are required"}
            message.to_json
        end
    end



##======edit post

patch "/posts/editpost/:id" do
     
    image=params[:image]
    image1=params[:image1]
    image2=params[:image2]
    image3=params[:image3]
    price=params[:price]
    location=params[:location]
    bedrooms=params[:bedrooms]
    content=params[:content]
    


    if(image.present? &&  location.present? && bedrooms.present?)
        post_find = Post.find_by(id: params[:id])
        post = post_find.update(image: image, image1: image1, image2: image2, image3: image3, price: price, location: location, bedrooms: bedrooms, content: content)
        if post
            message = {:success=> "Post updated successfully"}
            message.to_json
        else
            message = {:error=> "Error updating post"}
            message.to_json
        end

      else
        status 406
        message = {:error=> "All field are required"}
        message.to_json

      end

end

###===============delete post

delete "/posts/delete/:id" do
     
    
    check_post = Post.exists?(id: params[:id] ) 
    if check_post
        post = Post.find(params[:id])
        post.destroy
        message = {:success=> "Post deleted successfully"}
        message.to_json
    else
        status 406
        message = {:error=> "The post does not exist"}
        message.to_json
    end


end













end