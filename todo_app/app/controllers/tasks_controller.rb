require 'pry'

class TasksController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@tasks = Task.all)
  end

  def show
    @task = Task.find(params[:id])
    render json: @task
  end
  
  def create
    @task = Task.create(task_params)
    render json: @task
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
    render json: @task
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: 'deleted'
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.permit(:title, :content)
    end

end